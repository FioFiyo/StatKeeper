require 'faker'

class Seed
  def initialize
  end

  MODELS = %w[User League]

  def self.build_user(first_name: Faker::Name.first_name)
    {
      username: Faker::Internet.user_name,
      first_name: first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.email(first_name)
    }
  end

  def self.build_league
    {
      title: Faker::Space.galaxy,
      activity: Faker::Music.instrument
    }
  end

  def self.size(prompt = true)
    resobj = {}
    if prompt
      MODELS.each do |m|
        print "How many #{m.downcase.pluralize} would you like to create? "
        resobj[m] = STDIN.gets.chomp.to_i
      end
    else
      print "How many of each model would you like to create? "
      size = STDIN.gets.chomp.to_i
      MODELS.each do |m|
        resobj[m] = size
      end
    end
    return resobj
  end

  def self.populate_prompted
    size = self.size
    MODELS.each do |m|
      if !respond_to?("build_#{m.downcase}")
        puts "  * #{m.pluralize}: **warning** I couldn't find a build_#{m.downcase} method"
        next
      end

      1.upto(size[m]) do |u|
        attributes = send("build_#{m.downcase}")
        m.constantize.create!(attributes) if attributes && !attributes.empty?
      end
    end
  end

  def self.populate_generic
    size = self.size(false)
    MODELS.each do |m|
      if !respond_to?("build_#{m.downcase}")
        puts "  * #{m.pluralize}: **warning** I couldn't find a build_#{m.downcase} method"
        next
      end

      1.upto(size[m]) do |u|
        attributes = send("build_#{m.downcase}")
        m.constantize.create!(attributes) if attributes && !attributes.empty?
      end
    end
  end

  def self.clean
    MODELS.each do |m|
      m.constantize.destroy_all
    end
  end
end

namespace :seed do
  task prompted: :environment do
    Seed.populate_prompted
  end

  task generic: :environment do
    Seed.populate_generic
  end

  task clean: :environment do
    Seed.clean
  end
end
