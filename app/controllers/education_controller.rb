class EducationController < ApplicationController

	def index
	    respond_to do |format|
        format.html { redirect_to projects_path }
        format.js { }
      end 
     end 

end

