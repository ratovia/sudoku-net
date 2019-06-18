class Puzzle < ApplicationRecord
  belongs_to :rooms, optional: true
end
