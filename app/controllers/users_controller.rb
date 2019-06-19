class UsersController < ApplicationController
  def show
    @rooms = current_user.rooms
    @all_rooms = Room.all - @rooms
  end
end
