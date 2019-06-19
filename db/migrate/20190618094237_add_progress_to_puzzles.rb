class AddProgressToPuzzles < ActiveRecord::Migration[5.2]
  def change
    add_column :puzzles, :progress, :string
  end
end
