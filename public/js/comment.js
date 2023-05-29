const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_content = document.querySelector('#comment-content').value.trim();
  const post_id =  document.querySelector('.new-comment').id;

      console.log(post_id)
  if (comment_content) {

    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment_content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert(response.statusText);
    }
  }
};

document
.querySelector('.comment-form')
.addEventListener('submit', commentFormHandler);