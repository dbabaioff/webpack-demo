module.exports = {
    init: function() {
        document.querySelector('#btn').addEventListener('click', function() {
            alert('CLICKED!');    
        });
    }    
};