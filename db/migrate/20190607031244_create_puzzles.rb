class CreatePuzzles < ActiveRecord::Migration[5.2]
  def change
    create_table :puzzles do |t|
      t.references :room,null: false,foreign_key: true
      t.string :answer,null: false
      t.string :question,null: false
      t.timestamps
    end
  end
end
