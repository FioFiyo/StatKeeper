namespace :start do
  task :development do
    exec 'foreman start -f Procfile.dev'
  end
end

desc 'start dev server'
task :start => 'start:development'
