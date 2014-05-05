class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

	def correct_domain
		  redirect_to "http://www.evansitzes.com/", :status => 301
	end

end
