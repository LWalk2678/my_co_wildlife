class AnimalsController < ApplicationController
  before_action :set_animal, only: :show
  before_action :authorize_request, only: :create
  before_action :set_user_animal, only: [:update, :destroy]

  # GET /animals  - for main page to show all animals
  def index
    @animals = Animal.all

    render json: @animals
  end

  # GET /animals/1   - For details page
  def show
    render json: @animal
  end

  # POST /animals
  def create
    @animal = Animal.new(animal_params)
    @animal.user = @current_user
    if @animal.save
      render json: @animal, status: :created
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /animals/1
  def update
    if @animal.update(animal_params)
      render json: @animal
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /animals/1
  def destroy
    @animal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_animal
      @animal = Animal.find(params[:id])
    end

    def set_user_animal
      @animal = Animal.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def animal_params
      params.require(:animal).permit(:name, :description, :seen, :notes, :image_url, :user_id)
    end
end
