const newPostHandler = async (event) => {
    event.preventDefault();
  
    const description = document.querySelector('#comment-desc').value.trim();
  
    if (description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create comment');
      }
    }
  };