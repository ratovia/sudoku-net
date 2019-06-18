class AddRoomIdToPuzzles < ActiveRecord::Migration[5.2]
  def change
    add_column :puzzles, :room_id, :integer
  end
end
