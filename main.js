function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(75,75);
        
        ctx.arc(75, 75, 50, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.moveTo(100, 75);
        ctx.strokeRect(100,75,50,75);
        ctx.moveTo(150, 75);
        ctx.strokeRect(150,75,50,75);
        
        ctx.moveTo(100, 160);
        ctx.strokeRect(100, 160, 100, 120);
        ctx.fillStyle = 'rgb(120, 155, 167)';
        ctx.moveTo(120, 180);
        ctx.fillRect(120, 180, 60, 60);
        
        ctx.beginPath();
        ctx.moveTo(320, 300);
        ctx.fillStyle = 'blue';
        ctx.arc(320, 300, 100, 0 , Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(320, 300);
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.arc(320, 300, 70, 0 , Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(320, 300);
        ctx.fillStyle = 'yellow';
        ctx.arc(320, 300, 65, 0 , Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(320, 300);
        ctx.fillStyle = 'white';
        ctx.arc(320, 300, 35, 0 , Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(320, 300);
        ctx.fillStyle = 'red';
        ctx.arc(320, 300, 30, 0 , Math.PI * 2);
        ctx.fill();
        
    }
}
