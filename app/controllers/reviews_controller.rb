class ReviewsController < ApplicationController
  before_action :set_review, only: %i[show edit update destroy]
  before_action :set_restaurant, only: %i[index new create]

  # GET restaurant/1/reviews
  # GET restaurant/1/reviews.json
  def index
    @reviews = @restaurant.reviews
  end

  # GET restaurant/1/reviews/1
  # GET restaurant/1/reviews/1.json
  def show
    puts "YOAV: #{params.inspect}"
  end

  # GET restaurant/1/reviews/new
  def new
    @review = @restaurant.reviews.new
  end

  # GET restaurant/1/reviews/1/edit
  def edit
  end
  # 
  # POST restaurant/1/reviews
  # POST restaurant/1/reviews.json
  def create
    @review = @restaurant.reviews.create(review_params)

    respond_to do |format|
      if @review.save
        # format.html { redirect_to restaurant_review_path(@restaurant), notice: 'Review was successfully created.' }
        format.json { render :show, status: :created, location: @review }
      else
        # format.html { render :new }
        format.json { render json: @review.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT restaurant/1/reviews/1
  # PATCH/PUT restaurant/1/reviews/1.json
  def update
    respond_to do |format|
      if @review.update(review_params)
        # format.html { redirect_to @review, notice: 'Review was successfully updated.' }
        format.json { render :show, status: :ok, location: @review }
      else
        # format.html { render :edit }
        format.json { render json: @review.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE restaurant/1/reviews/1
  # DELETE restaurant/1/reviews/1.json
  def destroy
    @review.destroy
    respond_to do |format|
      # format.html { redirect_to reviews_url, notice: 'Review was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_review
    @review = Review.find(params[:id])
  end

  def set_restaurant
    @restaurant = Restaurant.find(params[:restaurant_id])
  end

  def review_params
    params.require(:review).permit(:reviewer_name, :rating, :comment)
  end
end
