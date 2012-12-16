<script type="text/template"><ul class="nav nav-pills">
	<% _.each(data, function(model) {  %>
		<% if(!model.child) { %> 
			<li>
				<a href="<%= model.link %>"><%= model.name %></a>
			</li>
		<% } else {  %>
			<li class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" role="button" href="<%= model.link %>"><%= model.name %><b class="caret"></b></a>
				<ul class="dropdown-menu" role="menu">
					<% _.each(model.child, function(childElement) {  %>
						<li>
							<a href="<%= childElement.link %>"><%= childElement.name %></a>
						</li>
					<% }) %>					
				</ul>
			</li>
		<% } %>
	<% }) %>	
</ul>
</script>