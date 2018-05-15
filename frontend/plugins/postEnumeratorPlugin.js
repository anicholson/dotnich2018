const mm = require('micromatch');
const glob = require('glob-fs')({ gitignore: true });

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
	return {
	    title: postfile
	};
    }

    apply(compiler) {
	compiler.plugin('emit', (compilation, callback) => {
	    const globber = glob.use(this.postMatcher);

	    globber.readdirPromise(this.glob, { cwd: this.postsPath}).then((files) => {
		
		let manifest = {
		    'posts': files.map(this.postToMeta)
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
