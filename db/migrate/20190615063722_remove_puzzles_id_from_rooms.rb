class RemovePuzzlesIdFromRooms < ActiveRecord::Migration[5.2]
  def change
    remove_column :rooms, :puzzle_id, :integer
  end
end
