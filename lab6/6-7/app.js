function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');
    let count = 1;  // keeping track of desired profile in foreach
    profiles.forEach(profile => {
        // making a mask for selector to know which profile it is affecting
        let stringMask = "user" + count.toString() + "HiddenFields";
        const unlockRadio = profile.querySelector('input[value="unlock"]');
        const hiddenFields = profile.querySelector(`div[id="${stringMask}"]`);  // here
        const showMoreBtn = profile.querySelector('button');
        showMoreBtn.addEventListener('click', function() {
            if (unlockRadio.checked && unlockRadio.value !== "lock") {
                // only allow this to happen when radio is checked and it's value is not locked
                hiddenFields.style.display = hiddenFields.style.display === 'none' || hiddenFields.style.display === '' ? 'block' : 'none';
                showMoreBtn.textContent = hiddenFields.style.display === 'none' ? 'Show more' : 'Hide it';
            }
        });
        count++;
    });
}
