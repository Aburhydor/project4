document.addEventListener('DOMContentLoaded', function () {
  var form1 = document.getElementById('myForm1');
  form1.addEventListener('submit', function (e) {
    e.preventDefault();
    var gUser = document.getElementById('gUser').value;
    var gUsers = gUser.split(' ').join('');

    var gitUser = document.getElementById('res').textContent;

    console.log(gUsers);
    fetch('https://api.github.com/users/' + gUsers)
      .then((res) => res.json())
      /*.then((data) => {
        console.log(data);
        document.getElementById(
          'result'
        ).innerHTML = `<a target='_blank' href='https://api.github.com/users/${users}'><img src=${data.avatar_url}/></a>`;
      });*/
      .then((data) => {
        if (data.message) {
          console.log('User not found');
          document.getElementById('res').innerHTML = `<h3>User not found</h3>`;
        } else {
          console.log(data);
          document.getElementById(
            'res'
          ).innerHTML = `<li><img src="${data.avatar_url}" style="width:50%"></li>
          <li>Name: ${data.name}</li>
          <li>Username: ${data.login}</li>
          <li>Followers: ${data.followers}</li>
          <li>following: ${data.following}</li>
          <li>Public repo: ${data.public_repos}</li>`;
        }
        valueresult();
      })
      .catch((e) => {
        console.log(e);
      });
  });

  function valueresult() {
    var res = document.getElementById('res').innerHTML;
    localStorage.setItem('myValue', res);
    window.location.href = 'last.html';
  }

  var c = localStorage.getItem('myValue');
  console.log('The Value Received is ' + c);

  //var resetValue = 0;
  // localStorage.setItem('myValue', resetValue);
});
