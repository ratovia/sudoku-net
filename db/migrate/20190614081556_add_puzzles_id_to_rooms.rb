class AddPuzzlesIdToRooms < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :puzzle_id, :integer
  end
end
