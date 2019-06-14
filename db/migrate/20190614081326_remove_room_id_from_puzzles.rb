class RemoveRoomIdFromPuzzles < ActiveRecord::Migration[5.2]
  def change
    remove_column :puzzles, :room_id, :integer
  end
end
