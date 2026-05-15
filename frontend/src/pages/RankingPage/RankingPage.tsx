import './RankingPage.css'

import { useMutation, useQuery } from '@apollo/client/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button/Button'
import { useAuth } from '../../context/useAuth'
import { ADD_DRINK_MUTATION, GET_ALL_DRINKS_QUERY } from '../../graphql/operations'

function RankingPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [formError, setFormError] = useState<string | null>(null)
  const [formSuccess, setFormSuccess] = useState<string | null>(null)

  const {
    data,
    loading: queryLoading,
    refetch,
  } = useQuery<{
    getAllDrinks: { id: string; name: string; description: string }[]
  }>(GET_ALL_DRINKS_QUERY)

  const [addDrink, { loading: mutationLoading }] = useMutation<{
    addNewMonsterFlavor: { id: string; name: string }
  }>(ADD_DRINK_MUTATION, {
    onCompleted: (data) => {
      setFormSuccess(`"${data.addNewMonsterFlavor.name}" added!`)
      setName('')
      setDescription('')
      setShowForm(false)
      refetch()
    },
    onError: (err: Error) => setFormError(err.message),
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)
    setFormSuccess(null)
    addDrink({ variables: { name, description: description || undefined } })
  }

  return (
    <main className="ranking-page">
      <h1 className="ranking-title">View Energy Drinks</h1>

      {user && !showForm && (
        <Button
          variant="primary"
          onClick={() => {
            setFormSuccess(null)
            setShowForm(true)
          }}
        >
          + Add a drink
        </Button>
      )}

      {showForm && (
        <section className="add-drink-section">
          <h2 className="add-drink-heading">Add a drink</h2>
          <form className="add-drink-form" onSubmit={handleSubmit}>
            <label className="add-drink-label">
              Name
              <input
                className="add-drink-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="e.g. Monster Ultra White"
              />
            </label>
            <label className="add-drink-label">
              Description <span className="add-drink-optional">(optional)</span>
              <input
                className="add-drink-input"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Crisp citrus flavour"
              />
            </label>
            {formError && <p className="add-drink-error">{formError}</p>}
            <div className="add-drink-actions">
              <Button variant="primary" type="submit" disabled={mutationLoading}>
                {mutationLoading ? 'Adding…' : 'Add drink'}
              </Button>
              <Button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </section>
      )}

      {formSuccess && <p className="add-drink-success">{formSuccess}</p>}

      <section className="drinks-list">
        {queryLoading && <p className="drinks-empty">Loading…</p>}
        {!queryLoading && data?.getAllDrinks.length === 0 && (
          <p className="drinks-empty">No drinks yet. Be the first to add one!</p>
        )}
        {data?.getAllDrinks.map((drink) => (
          <div key={drink.id} className="drink-card">
            <span className="drink-name">{drink.name}</span>
            {drink.description && <span className="drink-desc">{drink.description}</span>}
          </div>
        ))}
      </section>

      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </main>
  )
}

export default RankingPage
