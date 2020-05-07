(function($)
{
	$.Redactor.prototype.clips = function()
	{
		return {
			init: function()
			{
				var items = [
					['Claim Button', '<a class="btn-dc btn-main" href="/claim">Start your claim</a>'],
					['Claim Widget with money background', '<span style="padding:0;margin-bottom:32px;"><span style="background-image: url(/img/cta-money.svg);background-position: center bottom;background-repeat: no-repeat;background-size: 364px;padding: 32px 16px;background-color: #f3f9ff;border-radius: 6px;display: -webkit-box;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;flex-direction: column;"><span style="font-size: 20px;color: #2d3c4d;margin-bottom: 32px;">Data breached? You might have a right to compensation - up to $750</span><a style="width: 100%;text-align: center;" class="c-acf__cta-button btn-dc" href="/claim">Claim NOW</a></span></span>'],
					['Claim Widget 2 with color background', '<span style="padding:0;margin-bottom:32px;"><span style="background-size: 364px;padding: 32px 16px;background-color: #f3f9ff;border-radius: 6px;display: -webkit-box;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;flex-direction: column;"><span style="font-size: 20px;color: #2d3c4d;margin-bottom: 32px;">Data breached? You might have a right to compensation - up to $750</span><a style="width: 100%;text-align: center;" class="c-acf__cta-button btn-dc" href="/claim">Claim NOW</a></span></span>'],
					['Star Badge', '<span class="badge" style="background-color: #3bbfa5;"><i class="fa fa-star"></i></span>'],
					['Red label', '<span class="label-red">Label</span>']
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

