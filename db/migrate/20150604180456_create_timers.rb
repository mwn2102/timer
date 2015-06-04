class CreateTimers < ActiveRecord::Migration
  def change
    create_table :timers do |t|
      t.string :client
      t.text :task
      t.string :time_spent
      
      t.timestamps
    end
  end
end
