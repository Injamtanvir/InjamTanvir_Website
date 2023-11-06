document.addEventListener('DOMContentLoaded', (event) => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            const id = this.id;
            // Update with actual paths
            const paths = {
                'explore-space': 'INDIGO/ExploreSpace/dashboardvideo.html',
                'birthday-wish': 'INDIGO/BirthdayWish/inlatan.html',
                'my-card': 'INDIGO/MyCard/card.html'
            };
            window.location.href = paths[id] || '#';
        });
    });
});
