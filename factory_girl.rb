require 'factory_girl_rails'
RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods
  FactoryGirl.definition_file_paths = [File.expand_path('../factories', __FILE__)]
end
