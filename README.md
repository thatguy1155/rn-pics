# Interview Project

This repository is a starting point for implementing an interview challenge. This should get you everything
you need to just start working on react-native implementation. 

The starter project was created using [these steps](https://reactnative.dev/docs/0.60/getting-started). Note that I used the React-Native-CLI steps (not Expo). If you have any troubles with tooling then start there.

Implement the following features in the app using React Native and demo the app functionality using the ios simulator and the Android emulator. 

Once you're finished with the implementation then record a screen capture demo of the requirements. If you
can, please walk us through your demo with a mic. You can use Quicktime "New screen recording" or any other 
video screen capture system.

Deliverable: Email us the following:

- Link to your code implementation on a public github repository
- Video file for demo screen capture

## Steps to develop. 

Shell 1

```sh
cd mock
yarn run mock
```

Shell 2 - you can run the ios simulator and develop your app here

```sh
cd app
yarn run ios
```

## Requirements:

- Build a single screen for Viewing and Editing the Photos of a users profile.
    - This must show the photo previews/thumbnails or the full scale photos
    - Possible solutions could be a list of photos previews, a grid of photo previews, a scrolling list of photos. Pick a solution that works for you and would be relatively easy for a person to use.
- Rearrange photos
    - The profile will show the photos in order. Give users a way to rearrange the order.
- Remove photos
    - Remove a photo from the profile.
- Add new photo
    - Add a new photo.
    - You can hard code a URL of a photo from the internet in the event handling code or use the camera. Whatever works to get a new photo in the appropriate data format and display.
- The above functionality should query a backend service. The service API is as defined below.
    - This API can be simulated

### API definition:

**GET /member/{memberId}/photos**

Request Parameters: <none>

200 response: 

```typescript
interface APIGetPhotosResponse {
    id: string,
    memberId: string,
    photos: APIPhoto[],
};

interface APIPhoto {
    id: string,
    url: string,
    width: number,
    height: number,
}
```

**POST /member/{memberId}/photos**

Request Parameters:

```typescript
interface APIPostPhotosRequest {
    id: string,
    memberId: string,
    photos: APIPhoto[], 
}
```

200 response type:

```typescript
interface APIPostPhotosResponse {}
```

**DELETE /member/{memberId}/photos**
200 response type:

```typescript
interface APIDeletePhotosResponse {}
```

### Phase 2

Increment on your initial implementation to include the following type change. 

Requirements
- Implement custom offset based on the center of each photo.
- Photos should be scaled accordingly to still fit into the frame when offset to center. 

```typescript
interface APIPhoto {
    id: string,
    url: string,
    width: number,
    height: number,
    centerX: number,
    centerY: number,
}
```