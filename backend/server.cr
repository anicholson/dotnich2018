require "kemal"

serve_static({"gzip" => true, "dir_listing" => false })

get "/" do |env|
  send_file env, "./public/index.html"
end

Kemal.run
