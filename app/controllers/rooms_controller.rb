class RoomsController < ApplicationController
  before_action :authenticate_user!

  
  def create
    room = current_user.rooms.create(name: "#{current_user.name}の部屋");
    redirect_to room_puzzles_path(room)
  end
end
