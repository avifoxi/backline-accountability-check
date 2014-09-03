class RegisterVenueController < ApplicationController
  def new

  end

  def create
    parse_params


    @venue =
    @backline =

    redirect_to @venue
  end

  private
    def parse_params
      venue_params(params[:venue])
      parse_spec_params(params[:specs])
    end

    def venue_params
      params.require(:venue).permit(:name)
    end

    def parse_spec_params

    end

    def spec_params
      params.require(:venue).permit(:name)

    end
end
