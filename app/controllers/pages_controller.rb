class PagesController < ApplicationController
  def home
	  		set_meta_tags :description => "'Web development... My story'; evansitzes.com is a personal blog site for Evan Sitzes built in Ruby on Rails. 
	  																		This site acts as my personal online presence that highlights some of my skills, abilities and interests."
  		set_meta_tags :keywords => "Evan Sitzes - My Story of Web Development" 
  end

  def about 
	end 

	def asia 
	end 
	
	def projects 
	end 

	def resume 
	end 
end
