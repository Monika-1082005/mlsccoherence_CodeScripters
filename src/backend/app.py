import streamlit as st
import requests
from bs4 import BeautifulSoup
import matplotlib.pyplot as plt

# Set page config
st.set_page_config(page_title="Instagram Profile Dashboard", page_icon=":camera_flash:")

# Function to fetch profile data
def scrape_instagram_profile(username):
    url = f"https://www.instagram.com/{username}/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    profile_data = {'username': username}

    # Check if profile picture exists
    profile_picture_meta = soup.select_one("meta[property='og:image']")
    if profile_picture_meta:
        profile_data['profile_picture'] = profile_picture_meta['content']
    else:
        st.error("Failed to fetch profile picture. Please check the username.")
        return None

    meta_tag = soup.select_one("meta[property='og:description']")
    if meta_tag:
        content = meta_tag['content']
        parts = content.split(',')
        if len(parts) >= 3:
            profile_data['followers'] = int(parts[0].strip().split()[0].replace(',', ''))
            profile_data['following'] = int(parts[1].strip().split()[0].replace(',', ''))
            profile_data['posts'] = int(parts[2].strip().split()[0].replace(',', ''))
    else:
        st.error("Failed to fetch Instagram profile data. Please check the username.")
        return None

    return profile_data

# Function to visualize profile data
def visualize_profile_data_streamlit(profile_data):
    st.title("Instagram Profile Dashboard")

    # Display profile picture
    st.image(profile_data['profile_picture'], caption='Profile Picture', width=200, use_column_width=True)

    # Display profile information
    st.write("Follower Count:", profile_data.get('followers', 'N/A'))
    st.write("Following Count:", profile_data.get('following', 'N/A'))
    st.write("Post Count:", profile_data.get('posts', 'N/A'))

    # Plot bar graph for profile data
    st.subheader("Profile Statistics Visualization:")
    fig, ax = plt.subplots()
    labels = ['Followers', 'Following', 'Posts']
    values = [profile_data.get('followers', 0),
              profile_data.get('following', 0),
              profile_data.get('posts', 0)]
    ax.bar(labels, values, color=['blue', 'green', 'red'])
    plt.xlabel('Metrics')
    plt.ylabel('Count')
    plt.title('Instagram Profile Data (Bar Chart)')
    st.pyplot(fig)

# Launch Streamlit app
def main():
    # Input username
    username = st.text_input("Enter Instagram Username")
    if not username:
        st.warning("Please enter a username.")
        return

    # Fetch profile data
    profile_data = scrape_instagram_profile(username)
    if profile_data:
        # Visualize profile data
        visualize_profile_data_streamlit(profile_data)

if __name__ == '_main_':
    main()