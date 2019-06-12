class Api::PuzzlesController < ApplicationController
  def index
    room = Room.find(params[:room_id]);
    @puzzle = room.puzzle
  end
end
