class PagesController < ApplicationController
  def home
	  		set_meta_tags :description => "Welcome To My ' Hello World '; evansitzes.com is a personal blog site for Evan Sitzes built in Ruby on Rails. 
	  																		This site acts as my personal online presence that highlights some of my skills, abilities and interests."
  		set_meta_tags :keywords => "Evan Sitzes - Welcome To My ' Hello World '" 
  end

  def about 
	end 

	def asia 
	end 

    def programming_projects 
    end
	
	def analytics_projects 
	end 

	def resume 
	end 
end
