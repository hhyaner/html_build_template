require 'compass/import-once/activate'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
# http_path = "/"
css_dir = "release/css"
sass_dir = "src/sass"
images_dir = "release/images/"
sprite_load_path = "src/images/"
generated_images_dir = "release/images/"

# http_generated_images_path = "http://image.sucool.com/"
environment = :development # Symbol	The environment mode. Defaults to :development, can also be :production

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass


Encoding.default_external = "utf-8"