module Api
    module V1
        class ReviewsController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                airline = Airline.find_by(slug: params[:slug])
                reviews = airline.reviews
                render json: reviews
            end

            def create
                airline = Airline.find_by(id: params[:airline_id])
                review = airline.reviews.create(review_params)

                if review
                    render json: ReviewSerializer.new(review).serializable_hash
                else
                    render json: {error: review.errors.messages}, status: 422
                end
            end

            def destroy
                review = Review.find(params[:id])

                if review.destroy
                    head :no_content
                else 
                    render json: {error: review.errors.messages}, status: 422
                end
            end

            private

            def review_params 
                params.require(:review).permit(:title, :description, :score, :airline_id)
            end
        end
    end
end