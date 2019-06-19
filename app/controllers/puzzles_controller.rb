class PuzzlesController < ApplicationController
  def index
    @room = Room.find(params[:room_id])
  end

  def update
    puzzle = Puzzle.find(params[:id])
    puzzle = puzzle.update(progress: puzzles_params[:array])
    respond_to do |format|
      format.json
    end
  end

  private
    def puzzles_params
      params.permit(:array)
    end
end
