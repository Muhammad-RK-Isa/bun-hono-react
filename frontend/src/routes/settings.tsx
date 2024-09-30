import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: () => SettingComponent,
})

export default function SettingComponent () {
  return (
    <div>
      Settings page
    </div>
  )
}