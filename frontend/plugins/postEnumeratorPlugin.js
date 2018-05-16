const mm = require('micromatch');
const glob = require('glob-fs')({ gitignore: true });
const yamlFront = require('yaml-front-matter');
const fs = require('fs');
const hash = require('object-hash');

class PostEnumeratorPlugin {
    constructor({postsPath, glob='**/*.markdown'}) {
  this.postsPath = postsPath;
  this.glob = glob;
  this.readingPath = [postsPath, glob].join('/');
    }

    postMatcher(file) {
  if(mm.isMatch(file.relative, /markdown/)) {
      console.log("using file: ", file.relative);
      file.include = true;
  } else {
      console.log("what is: ", file.relative);
      file.exclude = true;
  }

  return file;
    }

    postToMeta(postfile) {
  let fileBuffer = fs.readFileSync(postfile);
  let parsedFile = yamlFront.loadFront(fileBuffer);

  let contents = parsedFile['__content'];
  delete parsedFile['__content'];

  let fileHash = hash(parsedFile);
  parsedFile['hash'] = fileHash;
  
  return [contents, parsedFile];
    }

    apply(compiler) {
  compiler.plugin('emit', (compilation, callback) => {
      const globber = glob.use(this.postMatcher);

      globber.readdirPromise(this.glob, { cwd: this.postsPath}).then((files) => {

    let metaInfo = []
    
    files.map((file) => {
        let info = this.postToMeta(file);
        let contents = info[0];
        let meta = info[1];

        metaInfo.unshift(meta);

        compilation.assets[`posts/${meta.hash}.md`] = {
      source: () => contents,
      size: () => contents.length
        };
    });
    
    let manifest = {
        'posts': metaInfo
    };
    
    let manifestAsString = JSON.stringify(manifest);
    
    compilation.assets['posts.json'] = {
        source: () => manifestAsString,
        size: () => manifestAsString.length
    }
    
    console.log("posts.json generated");
    callback();
      },);
  });
    }
}

module.exports = PostEnumeratorPlugin;
