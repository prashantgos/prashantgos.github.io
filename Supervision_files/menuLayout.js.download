$(function() {
    $.widget("jquery.menu", {
        _create: function () {
            this.$el = this.element;
            
            //this.$el.data("orientation", this.$el.attr("data-orientation"));
            this.$el.data("orientation", this.$el.hasClass("vertical-menu") ? "v" : "h");
            this.$el.data("submenuOrientation", this.$el.attr("data-submenuorientation"));
            this.$el.data("autoShrink", this.$el.attr("data-shrink") == "true");
            this.$el.data("shrinkLabel", this.$el.attr("data-shrinklabel"));
            this.$el.data("templateId", this.$el.attr("templateId"));
            this.$el.data("caretClass", this.$el.attr("data-caretclass"));
            this.$el.data("menuItemSpacing", this.$el.hasClass("vertical-menu") ? $("ul.nav > li:first", this.$el).css("margin-bottom"): $("ul.nav > li:first", this.$el).css("margin-right"));
            this.$el.data("menuItemTextPadding", $("ul.nav > li:first > a.menuPageLink > div.menulink-wrapper", this.$el).css("padding-left"));
            this.$el.data("menuBdrWidth", this.$el.attr("data-menuBdrWidth"));
            this.$el.data("itemScretch", this.$el.attr("data-itemscretch"));
            
        	var ui = { size: { width: this.element.width(), height: this.element.height() } };        	
        	this.render();
        	
            return this;
        },
        
        /*
		render: function() {
			var model = this.model,
				css = model.get("css"),
				attributes = model.get("attributes");
			
			//set default size for horizontal or vertical menu				
			var size = { width: this.$el.css("width"), height: this.$el.css("height") }				
			var orientation = "h";
			
			if(attributes["templateId"]) {
				var templateId = attributes["templateId"];
				var styles = this.menuStyles["menu" + templateId]["defaults"];
				orientation = styles["orientation"];
			}
			
			if(orientation.toLowerCase() == "h") {
				if(!css["horizontal"]) {
					this.$el.data("horizontal", size);
				}					
			}
			else {
				if(!css["vertical"]) {
					this.$el.data("vertical", size);						
				}
			}
							
			for(var i in attributes) {
				if(i == "templateId") {
					this.updateTemplate(attributes[i]);
				}					
				this.$el.data(i.toLowerCase(), attributes[i]);
			}	
			
			for(var i in css) {
				this.$el.data(i, css[i]);
			}	
										
			ElementView.prototype.render.call(this);
			
			this.$el[0].id = "menu";
			
			if(!attributes["templateId"] || attributes["templateId"].length < 1) {
				this.removeCssTemplate();
			}
			
			//set default size for horizontal or vertical menu		
			var size = { width: this.$el.css("width"), height: this.$el.css("height") }
		},     
		*/
        
        render: function() {
        	var element = this.$el;        	
        	var self = this;
        	
        	/*
        	$("ul.nav > li", element).hover(
    			function(event) {
    				self.onMenuItem(event);
    			},
    			function(event) {
    				self.onMenuItem(event);
    			}
        	)
        	*/
			this.minSize = this.getMinSize(this.$el.data("orientation"));
			
			var autoshrink = this.$el.data("autoShrink");
			var shrinkLabel = this.$el.data("shrinkLabel");

			if(autoshrink) {
				this.updateAutoShrink(autoshrink, shrinkLabel);
			}
			else {
				this.updateMenuItemStyle(this.$el.data("itemScretch"));					
			}
			
        	$("ul.nav > li", element).on("mouseenter mouseleave", function(event) {
   				self.onMenuItem(event);
        	});
        	
        	$(".dropdown-menu", element).on("mouseenter mouseleave", function(event) {
        		self.onSubmenuItem(event);
        	});

			element.find(".toggleSubmenu").click(function(e){
				var $li = $(this).parents("li.dropdown");
				$li.find("ul").toggle();
				return false;
			});			
        },
        
		getMinSize: function(orientation) {
			var element = this.$el;
			
			var self = this;
			var width = $(".nav", element).width(),
				height = $(".nav", element).height();
			
			if(orientation.toLowerCase() == "h") {
				width = 0;
				var maxWidth = Math.max.apply( null, $("ul.nav", element).first().find("> li").map( function () {
				    return $("> a.menuPageLink .text-wrapper", this).outerWidth(true);
				}).get() );
				
				var size = $("ul.nav", element).first().find("> li").size();
				width = (maxWidth  + (parseInt(self.$el.data("menuItemTextPadding")) * 2) + (parseInt(self.$el.data("menuItemSpacing")))) * size;					
				height = $("ul.nav", element).first().find("> li:first").height();
			}
			else {
				height = 40 * $("ul.nav > li", element).size();
			}				
			
			return { width: width, height: height };
		},
		
		getSize: function(orientation) {
			var element = this.$el;
			
			var self = this;
			var width = $(".nav", element).width(),
				height = $(".nav", element).height();
			
			if(orientation.toLowerCase() == "h") {
				width = 0;
				$("ul.nav", element).first().find("> li").each(function() {
					width = width + $(this).width() + (parseInt(self.$el.data("menuItemSpacing"))) + 5;
				});
				height = $("ul.nav", element).first().find("> li:first").height();
			}
			else {
				height = 0;
				$("ul.nav", element).first().find("> li").each(function() {
					height = height + $(this).height();
				});
				width = $("ul.nav", element).first().find("> li:first").width();
			}
							
			return { width: width, height: height };				
		},		        
	
		updateMenuItem: function(ui) {
			var element = this.$el;				
			var orientation = this.$el.data("orientation");
			var autoShrink = this.$el.data("autoShrink");
			
			var templateId = this.$el.data("templateId");
			//var caret = this.menuStyles["menu" + templateId]["defaults"]["caretClass"];
			var caret = this.$el.data("caretClass");
			
			if(orientation.toLowerCase() == "h") {
				if(ui.size.width < this.minSize.width) {
					this._addToMore();
				}
				else {
					var submenu = $("ul.nav > li.more > ul", element);
					var item = $("> li", submenu).first();
					
					//get the maxWidth from current menu + first item from the more menu
					var maxWidth = Math.max.apply( null, $("ul.nav", element).first().find("> li").map( function () {
					    return $("> a.menuPageLink .text-wrapper", this).outerWidth(true);
					}).get() );
					
					if($("> a.menuPageLink .text-wrapper", item).outerWidth(true) > maxWidth) {
						maxWidth = $("> a.menuPageLink .text-wrapper", item).outerWidth(true);
					}
					
					var minWidth = (maxWidth + (parseInt(this.$el.data("menuItemTextPadding")) * 2) 
									+ (parseInt(this.$el.data("menuItemSpacing"))) 
									+ $("> a.menuPageLink .caret-wrapper", item).outerWidth() + 10) 
								* ($("ul.nav > li", element).size() + 1);
					
					this._removeFromMore(parseInt(ui.size.width), parseInt(minWidth));
				}
			}
			else {
				//vertical
				if(ui.size.height < this.minSize.height) {
					this._addToMore();
				}
				else {
					var minHeight = 40 * ($("ul.nav > li", element).size() + 1);							
					this._removeFromMore(parseInt(ui.size.height), parseInt(minHeight));
				}
			}
		},
		
		_addToMore: function() {
			var element = this.$el;
			var orientation = this.$el.data("orientation");
			var autoShrink = this.$el.data("autoShrink");
			var shrinkLabel = this.$el.data("shrinkLabel");
			
			var templateId = this.$el.data("templateId");
			var caret = this.$el.data("caretClass");
			
			if ($("ul.nav > li.more", element).length == 0) {
				$("<li class='dropdown more'>" + 
					"<a href='#' class='menuPageLink dropdown-toggle'>" + 
						"<div class='menulink-wrapper'></div>" + 
					"</a><ul class='dropdown-menu'></ul>" + 
				  "</li>").appendTo($("ul.nav", element));
			}
			//add the text
			var link = $("ul.nav > li.more > a.menuPageLink .menulink-wrapper", element);
				link.html("<span class='text-wrapper'>" + shrinkLabel + "</span>");							
				link.append("<span class='caret-wrapper'><i class='fa fa-lg " + caret + "'></i></span>");
										
			$("ul.nav > li:nth-last-child(2)", element).css("width", "auto").prependTo($("ul.nav > li.more > ul", element));
			
			this.updateMenuItemStyle(autoShrink);
			this.minSize = this.getMinSize(orientation);
		},
		
		_removeFromMore: function(size, minSize) {
			var element = this.$el;				
			var orientation = this.$el.data("orientation");//this.model.get("attributes").orientation;
			var autoShrink = this.$el.data("autoShrink");
			
			var templateId = this.$el.data("templateId");
			//var caret = this.menuStyles["menu" + templateId]["defaults"]["caretClass"];
			var caret = this.$el.data("caretClass");
			
			var submenu = $("ul.nav > li.more > ul", element);
			var item = $("> li", submenu).first();
							
			if(size > minSize) {
				$("ul.nav > li.more", element).before(item);
				
				var moreItems = submenu.first().find("> li");
				if (moreItems.length == 0) {
					$("ul.nav > li.more", element).remove();
				}
			}
			
			this.updateMenuItemStyle(autoShrink);
			this.minSize = this.getMinSize(orientation);						
		},
		
		updateMenuItemStyle: function(value) {
			var element = this.$el;
			
			var orientation = this.$el.hasClass("vertical-menu") ? "v" : "h";
			var scretch = this.$el.data("itemscretch");
			
			var itemCount = $("ul.nav > li", element).length;
			
			if (scretch == true) {
				var width = this.$el.width(),
					height = this.$el.height();
				
				$("ul.nav", element).width(width);
				
				if (orientation.toLowerCase() == "h") {
					$("ul.nav > li", element).height("100%");
					
					var itemWidth = Math.floor(Math.floor(width / itemCount * 100) / 100) - (parseFloat(this.$el.data("menuItemSpacing"))) 
						- (parseFloat(this.$el.data("menuBdrWidth")) * 2);
					
					$("ul.nav", element).children("li").width(itemWidth + 'px');
				}
				else {
					$("ul.nav > li", element).width("auto");
					
					var itemHeight = (Math.floor(height / itemCount * 100) / 100) - (parseFloat(this.$el.data("menuItemSpacing")));						
					$("ul.nav > li", element).height(itemHeight + 'px');						
				}
			}
			else if (scretch == false) {
				$("ul.nav", element).width("auto");
				$("ul.nav > li", element).width("auto");
			}
								
			return false;
		},
		
		updateAutoShrink: function(isShrink, shrinkLabel) {
			var element = this.$el;
			
			this.$el.data("autoShrink", isShrink);
			this.$el.data("shrinkLabel", shrinkLabel);
			var self = this;
			
			var width = this.$el.width();				

			if (!isShrink) {
				this.$el.width(10000);
			}
			
			var ui = {
				size: {
					width: this.$el.width(),
					height: this.$el.height()
				}
			};
			
			var nav = $("ul.nav", element);
			nav.show();
			var items = nav.first().find("li");
			//make it evenly distributed first
			$(items.get().reverse()).each(function(){
				self.updateMenuItem(ui);
			});
			
			this.$el.width(width);
			//shrink to more if width is too short
			$(items.get().reverse()).each(function(){
				self.updateMenuItem(ui);
			});				
			
			//update menu label
			var link = $("ul.nav > li.more > a.menuPageLink .menulink-wrapper", element);
				$(".text-wrapper", link).text(shrinkLabel);
				
			return false;
		},
		
		onMenuItem: function(event) {
			var element = this.$el;
			
			var self = this;
			if(event.type == "mouseenter") {
				var target = $(event.currentTarget);
				$(event.currentTarget).addClass("open").find("ul.dropdown-menu").first().show();
				
				var dropdown = $("ul.dropdown-menu", event.currentTarget);
				
				var submenuOrientation = this.$el.data("submenuOrientation");
				//should check class instead
				if(submenuOrientation.toLowerCase() == "h") {
					var width = 0;
					$("ul.nav > li", element).each(function(){
						width += $(this).outerWidth(true);
					});
					dropdown.width(width);
				}
				else {
					dropdown.width("auto");
				}					
			}
			else {
				this.isMouseOut = true;
				var target = $(event.currentTarget);
				setTimeout(function() {
					if(self.isMouseOut) {
						target.find("ul").hide();
						if (!target.hasClass("active")) {
							target.removeClass("open");
						}
					}
				}, 100);
			}
		},
		
		onSubmenuItem: function(event) {
			if(event.type == "mouseenter") {
				this.isMouseOut = false;
			}
			else {
				this.isMouseOut = true;
			}
		}			
    });   
});