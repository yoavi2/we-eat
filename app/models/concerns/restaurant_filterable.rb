module RestaurantFilterable
  extend ActiveSupport::Concern

  module ClassMethods
    def filter(filtering_params)
      results = self.where(nil)

      # Go through all filters that we can chain
      filtering_params.each do |key, value|
        if key.in?(['ten_bis', 'cuisine', 'max_deliver_in_min', 'search', 'shortest'])
          results = results.public_send(key, value) if value.present?
        end
      end

      # Execute where filters (If exist)
      results = results.to_a

      # Sadly some filters don't play well together - We'll filter them "By hand"
      if filtering_params.key?('min_rating')
        value = filtering_params[:min_rating]

        results =
            results.reject {|r| r.rating.blank?}
                   .select {|r|
                        r.rating >= value.to_f # FIXME: Should really check if numeric before...
                        }

      end

      if filtering_params.key?('best') && filtering_params[:best] == 'true'
        res_with_rating = results.reject {|r| r.rating.blank?}
                               .sort_by(&:rating).reverse!
        results = res_with_rating + results.reject {|r| r.rating.present?}
      end

      results
    end
  end
end


