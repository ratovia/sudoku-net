class CreateRoomUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :room_users do |t|
      t.references :room
      t.references :user
      t.timestamps
    end
  end
end
