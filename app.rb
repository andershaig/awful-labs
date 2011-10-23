require 'rubygems'
require 'sinatra'
require 'datamapper'
require 'rack-flash'

enable :sessions
use Rack::Flash

helpers do
  def partial template
    erb template.to_sym, :layout => false
  end
end

DataMapper.setup(:default, ENV['DATABASE_URL'] || "sqlite://#{Dir.pwd}/my.db")

# TODO: Add database models here.

DataMapper.finalize
DataMapper.auto_upgrade!

get '/' do
  erb :index
end

get '/projects/css3d' do
  erb :project_css3d
end

get '/projects/lens' do
  erb :project_lens
end

get '/*' do
  erb :not_found
end
