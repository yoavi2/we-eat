class Restaurant < ApplicationRecord

  validates :name, :address, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 0.00,
                                     less_than_or_equal_to: 3 }

  enum cuisine: { italian: 1, israeli: 2, caffe: 3, meat: 4, drinks: 5 }

  # # @return [Array<Array>]
  # def self.gender_attributes_for_select
  #   cuisine.map do |cuisine, _|
  #     [I18n.t("activerecord.attributes.#{model_name.i18n_key}.cuisines.#{cuisine}"), cuisine]
  #   end
  # end
end
