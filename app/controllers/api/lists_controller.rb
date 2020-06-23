class Api::ListsController < ApplicationController

  def index
    render json: List.all
  end

  def show
    render json: List.find(params[:id])
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render json: @list
    else
      render json: { errors: @list.errors }, status:
      :unprocessable_entity 
    end
  end

  def update
    list = List.find(params[:id])
    list.update(complete: !list.complete)
    render json: list
  end

  def destroy
    List.find(params[:id]).destroy
    render json: {message: 'Item has been deleted'}
  end

  
  private
    def list_params
      params.require(:list).permit(:name, :price)
    end
end


