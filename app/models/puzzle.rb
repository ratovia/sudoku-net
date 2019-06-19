class Puzzle < ApplicationRecord
  belongs_to :rooms, optional: true
  validates :answer, length: { is: 81 } 
  validates :progress, length: { is: 81 } 
  validates :question, length: { is: 81 } 
end
