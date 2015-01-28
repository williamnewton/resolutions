class Item < ActiveRecord::Base
	belongs_to :user
	GROUPS = { '#daily' => 0, '#weekly' => 1, '#bi-weekly' => 2, '#monthly' => 3 }

	scope :daily, ->(user) { where(user: user, list_id: 0) }
	scope :weekly, ->(user) { where(user: user, list_id: 1) }
	scope :bi_weekly, ->(user) { where(user: user, list_id: 2) }
	scope :monthly, ->(user) { where(user: user, list_id: 3) }
end

