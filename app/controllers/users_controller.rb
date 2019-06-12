class UsersController < ApplicationController
  def show
    @all_rooms = Room.all
    # TODO @all_roomsから所属済みの部屋を除く
    @rooms = current_user.rooms
  end
end
