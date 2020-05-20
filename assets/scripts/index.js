window.addEventListener('DOMContentLoaded', function() {
	function HomePage() {
		this.init = function() {
			this.GreetingEl = document.getElementById('Greeting');
			this.CurrentTimeEl = document.getElementById('CurrentTime');

			this.setTime();
			this.setGreeting();
			return this;
		}

		this.setTime = function() {
			this.CurrentTimeEl.innerText = moment().format('HH:mm');
		}
	
		this.setGreeting = function() {
			var text = "Hello";
			var hours = moment()
			if (hours > 4 && hours < 12) {
				text = "Good morning";
			} else if (hours >= 12 && hours < 18) {
				text = "Good afternoon";
			} else {
				text = "Good evening";
			}
			this.GreetingEl.innerText = text;
		}

		return this.init();
	}

	var homePage = new HomePage();
	setInterval(function() {
		homePage.setTime();
	}, 30000);
})
