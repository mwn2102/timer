class Timer < ActiveRecord::Base
    def convert (word)
        a = word[0,2]
    	a = a.to_i
    	b = word[3,2]
    	b = b.to_i
    	b = (b/6).to_f
    	b = b/10
    	c = a + b
        c
    end
end


