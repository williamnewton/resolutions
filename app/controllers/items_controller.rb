class ItemsController < ApplicationController
	def index
		@items = Item.all
	end

	def create
		@item = Item.new(item_params)
		if @item.save
			head :ok
		else
			respond_with @item, status: :unprocessable_entity
		end	
	end

	def populate
		Item.where(user_id: current_user.id).destroy_all

		Item::GROUPS.each do |id, index|
			params[id].each do |item_data|
				Item.create(user: current_user, text: item_data, list_id: Item::GROUPS[id])
			end
		end

		head :ok
	end

	private
		def item_params
			params.require(:item).permit(:text, :list_id)
		end
end	