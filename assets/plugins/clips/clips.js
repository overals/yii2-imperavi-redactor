(function($)
{
	$.Redactor.prototype.clips = function()
	{
		return {
			init: function()
			{
				var items = [
					['Lorem ipsum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
					['Red label', '<span class="label-red">Label</span>'],
					['Claim Button', '<a class="btn-dc btn-main" href="/claim">Start your claim</a>'],
					['Claim Widget with money background', '<div class="c-acf__cta"> <div class="c-acf__cta-money"> <span class="c-acf__cta-text">Data breached? You might have a right to compensation - up to $750</span> <a class="c-acf__cta-button btn-dc" href="/claim">Claim NOW</a> </div> </div>']
					['Claim Widget with color background', '<div class="c-acf__cta"> <div class="c-acf__cta-background"> <span class="c-acf__cta-text">Data breached? You might have a right to compensation - up to $750</span> <a class="c-acf__cta-button btn-dc" href="/claim">Claim NOW</a> </div> </div>']
				];

				this.clips.template = $('<ul id="redactor-modal-list">');

				for (var i = 0; i < items.length; i++)
				{
					var li = $('<li>');
					var a = $('<a href="#" class="redactor-clip-link">').text(items[i][0]);
					var div = $('<div class="redactor-clip">').hide().html(items[i][1]);

					li.append(a);
					li.append(div);
					this.clips.template.append(li);
				}

				this.modal.addTemplate('clips', '<section>' + this.utils.getOuterHtml(this.clips.template) + '</section>');

				var button = this.button.add('clips', 'Clips');
				this.button.addCallback(button, this.clips.show);

			},
			show: function()
			{
				this.modal.load('clips', 'Insert Clips', 400);

				this.modal.createCancelButton();

				$('#redactor-modal-list').find('.redactor-clip-link').each($.proxy(this.clips.load, this));

				this.selection.save();
				this.modal.show();
			},
			load: function(i,s)
			{
				$(s).on('click', $.proxy(function(e)
				{
					e.preventDefault();
					this.clips.insert($(s).next().html());

				}, this));
			},
			insert: function(html)
			{
				this.selection.restore();
				this.insert.html(html);
				this.modal.close();
				this.observe.load();
			}
		};
	};
})(jQuery);

