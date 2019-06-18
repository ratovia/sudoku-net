class RoomsController < ApplicationController
  before_action :authenticate_user!

  
  def create
    room = current_user.rooms.create(name: "#{current_user.name}の部屋",);
    puzzle = Puzzle.where("room_id is null").sample
    puzzle.room_id = room.id
    puzzle.save
    redirect_to room_puzzles_path(room)
  end
end
