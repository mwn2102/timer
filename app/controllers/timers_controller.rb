class TimersController < ApplicationController
    
    def index
        @timers = Timer.all
    end
    
    
    def new
        @timer = Timer.new
    end
    
    def edit
        @timer = Timer.find(params[:id])
        @decimal = @timer.convert(@timer.time_spent)
    end
    
    def create
        @timer = Timer.new(timer_params)
        @timer.save
        # flash.now = "Task Created!"
        redirect_to edit_timer_path(@timer)
    end
    
    def update
        @timer = Timer.find(params[:id])
        @timer.update(timer_params)
        redirect_to edit_timer_path(@timer)
        # flash.notice = "Timer Updated!"
    end 
    
    private
    def timer_params
        params.require(:timer).permit(:client, :task, :time_spent)
    end
end
